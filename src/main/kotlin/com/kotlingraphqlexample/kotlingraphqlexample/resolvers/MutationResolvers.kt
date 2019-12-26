package com.kotlingraphqlexample.kotlingraphqlexample.resolvers

import Edge
import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.kotlingraphqlexample.kotlingraphqlexample.data.generateUniqueId
import com.kotlingraphqlexample.kotlingraphqlexample.data.heroes
import com.kotlingraphqlexample.kotlingraphqlexample.data.royalties
import com.kotlingraphqlexample.kotlingraphqlexample.model.*
import org.springframework.stereotype.Component
import reactor.core.publisher.DirectProcessor

val streamOfSubscriptions = DirectProcessor.create<String>()

@Component
class MutationResolvers: GraphQLMutationResolver {
  /**
   * @param[input] has the CreatePersonInput type
   * @description best practice to have an input type for all kinds of inputs in Mutation
   * @return MutationPayload - best practice to include error payload to deliver a sensible error message to the client
   */
  fun createPerson(input: CreatePersonInput): MutationPayload {
    if (input.type == TYPE.ROYALTIES && input.title != null) {
      val newRoyalty = Royalty(id = generateUniqueId(), name = input.name, image = input.image, title = input.title)
      royalties.add(newRoyalty)
      val newEdge = Edge(cursor = newRoyalty.id, node = newRoyalty)
      return MutationPayload(result = newEdge, error = "No Error")
    }
    else if (input.type == TYPE.HEROES && input.ability != null) {
      val newHero = Hero(id = generateUniqueId(), name = input.name, image = input.image, ability = input.ability)
      heroes.add(newHero)
      val newEdge = Edge(cursor = newHero.id, node = newHero)
      return MutationPayload(result = newEdge, error = "No Error")
    }
    streamOfSubscriptions.onNext("")
    return MutationPayload(result = Edge(cursor = generateUniqueId(), node = null), error = "Missing fields")
  }
}
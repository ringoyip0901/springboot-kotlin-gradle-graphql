package com.kotlingraphqlexample.kotlingraphqlexample.resolvers
import Edge
import com.coxautodev.graphql.tools.GraphQLSubscriptionResolver
import com.kotlingraphqlexample.kotlingraphqlexample.dao.PersonDao
import com.kotlingraphqlexample.kotlingraphqlexample.data.data
import com.kotlingraphqlexample.kotlingraphqlexample.model.Edges
import com.kotlingraphqlexample.kotlingraphqlexample.model.PageInfo
import java.time.Duration
import java.time.LocalDateTime
import java.util.*
import java.util.function.Consumer
import org.reactivestreams.Publisher
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Component
import org.springframework.stereotype.Controller
import reactor.core.publisher.Flux
import reactor.core.publisher.FluxSink
import reactor.core.publisher.SynchronousSink

fun getFamily(): Edges {
  val edges = Edges(data.map { person -> Edge(person.id, PersonDao().getPersonById(person.id)) }, PageInfo())
  return edges
}

data class Tick(val x: LocalDateTime)

@Component
@Controller
class PersonSubscriptionResolver : GraphQLSubscriptionResolver {

  fun timer(): Publisher<Tick> {
    return Flux.generate(
        Consumer<SynchronousSink<LocalDateTime>> { sink ->
          sink.next(LocalDateTime.now())
        })
        .map { Tick(it) }
        .delayElements(Duration.ofSeconds(1))
  }

  // difference between create and generation - https://stackoverflow.com/questions/49951060/difference-between-flux-create-and-flux-generate
  // generate: Programmatically create a Flux by generating signals one-by-one via a consumer callback.
  @MessageMapping("/subscribe")
  @SendTo("/topic/family")
  fun subscribeToFamily(first: Int): Publisher<Edges> {
    return Flux.create(
        Consumer<FluxSink<Edges>> { sink ->
          sink.next(getFamily())
        })
  }
}

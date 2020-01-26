package com.kotlingraphqlexample.kotlingraphqlexample.resolvers
import Edge
import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.coxautodev.graphql.tools.SchemaParserDictionary
import com.kotlingraphqlexample.kotlingraphqlexample.data.*
import com.kotlingraphqlexample.kotlingraphqlexample.model.*
import org.apache.commons.lang3.mutable.Mutable
//import com.kotlingraphqlexample.kotlingraphqlexample.repositories.RoyaltyRepo
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Component

/**
 * @description cursor pagination has not been implemmented yet.
 */
fun createCollection(first: Int, cursor: String, type: String): PeopleCollection {
  val people = if (type == "Royalties") { ROYALTIES } else { HEROES }
//  val people = if (type == Type.ROYALTIES) { ROYALTIES.slice(IntRange(0, first - 1)) } else { HEROES.slice(IntRange(0, first - 1)) }
  return PeopleCollection(
      people.map { person -> Edge(person.id, person)},
      pageInfo = PageInfo(), //set to default for now
      totalCount = people.size
  );
}

@Component
class QueryResolvers() : GraphQLQueryResolver {

  fun heroes(): Heroes {
    return Heroes(members = HEROES)
  }

  fun sample(): Sample {
    return Sample(name = "sample name")
  }

  fun allPeople(first: Int, cursor: String, type: String): PeopleCollection {
    return createCollection(first, cursor, type)
  }
  /**
   * @description to validate the Person interface used as an implementation of Royalty & Hero
   */
  @Bean
  fun schemaParserDictionary(): SchemaParserDictionary? {
    return SchemaParserDictionary()
        .add(Royalty::class.java)
        .add(Hero::class.java)
  }
}





//val edges = Edges(data.map { person -> Edge(person.id, PersonDao().getPersonById(person.id)) }, PageInfo())
// just an example for using GraphQLQueryResolver, which is used to retrieve the root fields
//@Component
//class PersonQueryResolver(private val personDao: PersonDao) : GraphQLQueryResolver {
//    fun getPersonById(id: String) = personDao.getPersonById(id)
//    fun getPersonByName(name: String) = personDao.getPersonByName(name)
//    fun getAllPeople(offset: Int) = personDao.getAllPeople(offset)
//    fun getEveryone(offset: Int?): AllPeople = AllPeople(edges)
//}
//
//@Component
//class AllPeopleQueryResolver(private val personDao: PersonDao) : GraphQLResolver<AllPeople> {
//    fun allPeople(allPeople: AllPeople, name: String?, image: String?, first: Int = 1, after: String = "1"): Edges {
//        val listOfEdges = Edges(data.map { person -> Edge(person.id, PersonDao().getPersonById(person.id)) }, PageInfo()).edges
//        val indexOfAfterCursor: Int = listOfEdges.indexOfFirst { it.cursor == after }
//        val hasNextPage: Boolean = if (after == data.lastIndex.toString()) false else true // Relay can understand whether a refetch is necessary based on this piece of information
//        val selectedListOfEdges = listOfEdges.slice(IntRange(indexOfAfterCursor, indexOfAfterCursor + first))
//        val resultEdges = Edges(listOfEdges, PageInfo(hasNextPage = hasNextPage, endCursor = selectedListOfEdges.last().cursor))
//        return resultEdges
//    }
//}

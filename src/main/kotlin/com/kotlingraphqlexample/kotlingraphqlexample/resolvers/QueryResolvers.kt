package com.kotlingraphqlexample.kotlingraphqlexample.resolvers
import Edge
import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.coxautodev.graphql.tools.SchemaParserDictionary
import com.kotlingraphqlexample.kotlingraphqlexample.data.*
import com.kotlingraphqlexample.kotlingraphqlexample.model.*
import com.kotlingraphqlexample.kotlingraphqlexample.repositories.RoyaltyRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Component

/**
 * @description cursor pagination has not been implemmented yet.
 * @description only offset pagination has been "partially" implemented.
 */
fun createCollection(first: Int, cursor: String, type: TYPE): PeopleCollection {

  val people = if (type == TYPE.ROYALTIES) { royalties.slice(IntRange(0, first - 1)) } else { heroes.slice(IntRange(0, first - 1)) }
  return PeopleCollection(
      people.map { person -> Edge(person.id, person)},
      pageInfo = PageInfo(), //set to default for now
      totalCount = royalties.size
  );
}

@Component
class QueryResolvers() : GraphQLQueryResolver {
  @Autowired
  lateinit var royaltyRepo: RoyaltyRepo;

  fun allPeople(first: Int, cursor: String, type: TYPE): PeopleCollection {
    val allRoyalties = royaltyRepo.findAll();
    println("Royalties: " + allRoyalties);
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

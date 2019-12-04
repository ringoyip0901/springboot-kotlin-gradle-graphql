package com.kotlingraphqlexample.kotlingraphqlexample
import AllPeople
import Edge
import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.coxautodev.graphql.tools.GraphQLResolver
import org.springframework.stereotype.Component

val edges = Edges(
    mutableListOf(
        Edge("1", PersonDao().getPersonById("1")),
        Edge("2", PersonDao().getPersonById("2")),
        Edge("3", PersonDao().getPersonById("3")),
        Edge("4", PersonDao().getPersonById("4")),
        Edge("5", PersonDao().getPersonById("5")),
        Edge("6", PersonDao().getPersonById("6")),
        Edge("7", PersonDao().getPersonById("7")),
        Edge("8", PersonDao().getPersonById("8"))
    ),
    PageInfo()
)

// just an example for using GraphQLQueryResolver, which is used to retrieve the root fields
@Component
class PersonQueryResolver(private val personDao: PersonDao) : GraphQLQueryResolver {
    fun getPersonById(id: String) = personDao.getPersonById(id)
    fun getPersonByName(name: String) = personDao.getPersonByName(name)
    fun getAllPeople(offset: Int) = personDao.getAllPeople(offset)
    fun getEveryone(offset: Int?): AllPeople = AllPeople(personDao.getAllPeople(offset), edges)
}

@Component
class AllPeopleQueryResolver(private val personDao: PersonDao) : GraphQLResolver<AllPeople> {
    fun people(allPeople: AllPeople, name: String?, image: String?, count: Int?, cursor: String?): List<Person> {
        val filteredByName: List<Person> = if (name != null) allPeople.people.filter { it.name == name } else allPeople.people
        val filteredByImage: List<Person> = if (image != null) filteredByName.filter { it.image == image } else filteredByName
        val sortedById: List<Person> = if (cursor != null) filteredByImage.filter { Integer.parseInt(it.id) < Integer.parseInt(cursor) }.sortedBy { it.id } else filteredByImage
        val counted: List<Person> = sortedById.subList(0, count ?: sortedById.size - 1)
        return counted
    }

    fun allPeople(allPeople: AllPeople, name: String?, image: String?, first: Int, after: String = "1"): Edges {
//        fun getPersonById(id: String) = personDao.getPersonById(id)
//        val filteredByName: List<Person> = if (name != null) allPeople.people.filter { it.name == name } else allPeople.people
//        val filteredByImage: List<Person> = if (image != null) filteredByName.filter { it.image == image } else filteredByName
//        val sortedById: List<Person> = if (cursor != null) filteredByImage.filter { Integer.parseInt(it.id) < Integer.parseInt(cursor) }.sortedBy { it.id } else filteredByImage
        // val paginatedEdges: List<Person> = edges.edges.subList(after, first)
        println("first: " + first)
        println("cursor: " + after)
        val listOfEdges = edges.edges;
        val indexOfAfterCursor: Int = listOfEdges.indexOfFirst{ it.cursor == after}

        val hasNextPage: Boolean = if (after == "7") false else true //Relay can understand whether a refetch is necessary based on this piece of information
        val selectedListOfEdges = listOfEdges.slice(IntRange(indexOfAfterCursor, indexOfAfterCursor + 1))
        println("IndexOfAfterCursor: " + indexOfAfterCursor)
        //val selectedListOfEdges = mutableListOf<Edge>(listOfEdges[indexOfAfterCursor])
        println(selectedListOfEdges.size)
        val resultEdges = Edges(selectedListOfEdges, PageInfo(hasNextPage = hasNextPage, endCursor = selectedListOfEdges.last().cursor))
        return resultEdges
    }
}

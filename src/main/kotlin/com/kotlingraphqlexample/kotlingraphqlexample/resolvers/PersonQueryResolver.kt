package com.kotlingraphqlexample.kotlingraphqlexample.resolvers
import AllPeople
import Edge
import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.coxautodev.graphql.tools.GraphQLResolver
import com.kotlingraphqlexample.kotlingraphqlexample.dao.PersonDao
import com.kotlingraphqlexample.kotlingraphqlexample.data.data
import com.kotlingraphqlexample.kotlingraphqlexample.model.Edges
import com.kotlingraphqlexample.kotlingraphqlexample.model.PageInfo
import org.springframework.stereotype.Component

val edges = Edges(data.map { person -> Edge(person.id, PersonDao().getPersonById(person.id)) }, PageInfo())
// just an example for using GraphQLQueryResolver, which is used to retrieve the root fields
@Component
class PersonQueryResolver(private val personDao: PersonDao) : GraphQLQueryResolver {
    fun getPersonById(id: String) = personDao.getPersonById(id)
    fun getPersonByName(name: String) = personDao.getPersonByName(name)
    fun getAllPeople(offset: Int) = personDao.getAllPeople(offset)
    fun getEveryone(offset: Int?): AllPeople = AllPeople(edges)
}

@Component
class AllPeopleQueryResolver(private val personDao: PersonDao) : GraphQLResolver<AllPeople> {
    fun allPeople(allPeople: AllPeople, name: String?, image: String?, first: Int = 1, after: String = "1"): Edges {
        val listOfEdges = Edges(data.map { person -> Edge(person.id, PersonDao().getPersonById(person.id)) }, PageInfo()).edges
        val indexOfAfterCursor: Int = listOfEdges.indexOfFirst { it.cursor == after }
        val hasNextPage: Boolean = if (after == data.lastIndex.toString()) false else true // Relay can understand whether a refetch is necessary based on this piece of information
        val selectedListOfEdges = listOfEdges.slice(IntRange(indexOfAfterCursor, indexOfAfterCursor + first))
        val resultEdges = Edges(listOfEdges, PageInfo(hasNextPage = hasNextPage, endCursor = selectedListOfEdges.last().cursor))
        return resultEdges
    }
}

@Component
class AllMemberResolver() : GraphQLQueryResolver<MemberCollection> {
    fun allMember(first: Int, after: String) {
    }
}

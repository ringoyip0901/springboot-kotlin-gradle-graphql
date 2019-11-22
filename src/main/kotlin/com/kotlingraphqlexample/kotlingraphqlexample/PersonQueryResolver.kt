package com.kotlingraphqlexample.kotlingraphqlexample

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component

data class AllPeople (val people: List<Person>)

//just an example for using GraphQLQueryResolver, which is used to retrieve the root fields
@Component
class PersonQueryResolver (private val personDao: PersonDao): GraphQLQueryResolver {
    fun getPersonById(id: String) = personDao.getPersonById(id)
    fun getPersonByName(name: String) = personDao.getPersonByName(name)
    fun getAllPeople(offset: Int) = personDao.getAllPeople(offset)
    fun getEveryone(offset: Int): AllPeople = AllPeople(personDao.getAllPeople(offset))
}
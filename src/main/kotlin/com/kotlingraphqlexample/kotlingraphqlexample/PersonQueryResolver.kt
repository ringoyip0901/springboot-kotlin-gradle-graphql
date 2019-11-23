package com.kotlingraphqlexample.kotlingraphqlexample

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component
import com.coxautodev.graphql.tools.GraphQLResolver

data class AllPeople (val people: List<Person>)

//just an example for using GraphQLQueryResolver, which is used to retrieve the root fields
@Component
class PersonQueryResolver (private val personDao: PersonDao): GraphQLQueryResolver {
    fun getPersonById(id: String) = personDao.getPersonById(id)
    fun getPersonByName(name: String) = personDao.getPersonByName(name)
    fun getAllPeople(offset: Int) = personDao.getAllPeople(offset)
    fun getEveryone(offset: Int?): AllPeople = AllPeople(personDao.getAllPeople(offset))
}

@Component
class AllPeopleQueryResolver (): GraphQLResolver<AllPeople> {
    fun people(allPeople: AllPeople, name: String?, image: String?, count: Int?, cursor: String?): List<Person>  {
        val filteredByName: List<Person> = if (name != null) allPeople.people.filter { it.name == name } else allPeople.people;
        val filteredByImage: List<Person> = if (image != null) filteredByName.filter { it.image == image } else filteredByName;
        val sortedById: List<Person> = if (cursor != null) filteredByImage.filter { Integer.parseInt(it.id) < Integer.parseInt(cursor) }.sortedBy { it.id } else filteredByImage;
        val counted: List<Person> = sortedById.subList(0, count ?: sortedById.size - 1);
        println("name: ${name}")
        println(filteredByImage.count())
        return counted;
    }
        
}

package com.kotlingraphqlexample.kotlingraphqlexample.dao

import Edge
import com.kotlingraphqlexample.kotlingraphqlexample.data.data
import com.kotlingraphqlexample.kotlingraphqlexample.model.Edges
import com.kotlingraphqlexample.kotlingraphqlexample.model.PageInfo
import com.kotlingraphqlexample.kotlingraphqlexample.model.Person
import org.springframework.stereotype.Component

@Component
// this class is used just to load hard data into the resolver(s)
class PersonDao {

    fun getPersonById(id: String) = data.firstOrNull { person -> person.id == id }
    fun getPersonByName(name: String) = data.firstOrNull { person -> person.name == name }
    fun createPerson(name: String, image: String): Edges {
        val person = Person(id = (data.size + 1).toString(), name = name, image = image)
        data.add(person)
        val edges = Edges(data.map { person -> Edge(person.id, getPersonById(person.id)) }, PageInfo());
        return edges;
    }
    fun getAllPeople(offset: Int?): List<Person> {
        val range = IntRange(start = offset ?: 0, endInclusive = data.size - 1);
        return data.slice(range)
    }
}

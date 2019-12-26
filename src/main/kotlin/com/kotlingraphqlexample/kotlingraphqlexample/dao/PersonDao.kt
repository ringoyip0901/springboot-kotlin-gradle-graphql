package com.kotlingraphqlexample.kotlingraphqlexample.dao

import Edge
import com.kotlingraphqlexample.kotlingraphqlexample.data.data
import com.kotlingraphqlexample.kotlingraphqlexample.model.Edges
import com.kotlingraphqlexample.kotlingraphqlexample.model.PageInfo
import com.kotlingraphqlexample.kotlingraphqlexample.model.Royalty
import com.kotlingraphqlexample.kotlingraphqlexample.model.TITLE
import org.springframework.stereotype.Component

@Component
// this class is used just to load hard data into the resolver(s)
class PersonDao {

    fun getPersonById(id: String) = data.firstOrNull { person -> person.id == id }
    fun getPersonByName(name: String) = data.firstOrNull { person -> person.name == name }
    fun createPerson(name: String, image: String, title: TITLE): Edges {
        val person = Royalty(id = (data.size + 1).toString(), name = name, image = image, title = TITLE.KING)
        data.add(person)
        val edges = Edges(data.map { person -> Edge(person.id, getPersonById(person.id)) }, PageInfo());
        return edges;
    }
    fun getAllPeople(offset: Int?): List<Royalty> {
        val range = IntRange(start = offset ?: 0, endInclusive = data.size - 1);
        return data.slice(range)
    }
}

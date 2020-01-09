package com.kotlingraphqlexample.kotlingraphqlexample.dao

import Edge
import com.kotlingraphqlexample.kotlingraphqlexample.data.DATA
import com.kotlingraphqlexample.kotlingraphqlexample.model.Edges
import com.kotlingraphqlexample.kotlingraphqlexample.model.PageInfo
import com.kotlingraphqlexample.kotlingraphqlexample.model.Royalty
import com.kotlingraphqlexample.kotlingraphqlexample.model.Title
import org.springframework.stereotype.Component

@Component
// this class is used just to load hard data into the resolver(s)
class PersonDao {

    fun getPersonById(id: String) = DATA.firstOrNull { person -> person.id == id }
    fun getPersonByName(name: String) = DATA.firstOrNull { person -> person.name == name }
    fun createPerson(name: String, image: String, title: Title): Edges {
        val person = Royalty(id = (DATA.size + 1).toString(), name = name, image = image, title = Title.KING)
        DATA.add(person)
        val edges = Edges(DATA.map { person -> Edge(person.id, getPersonById(person.id)) }, PageInfo());
        return edges;
    }
    fun getAllPeople(offset: Int?): List<Royalty> {
        val range = IntRange(start = offset ?: 0, endInclusive = DATA.size - 1);
        return DATA.slice(range)
    }
}

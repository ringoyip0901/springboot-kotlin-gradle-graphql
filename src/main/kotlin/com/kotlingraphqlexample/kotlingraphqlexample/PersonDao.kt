package com.kotlingraphqlexample.kotlingraphqlexample

import org.springframework.stereotype.Component

@Component
//this class is used just to load hard data into the resolver(s)
class PersonDao {
    private val data = mutableListOf(
        Person(id = "qeii", name = "Queen Elizabeth II"),
        Person(id = "pp", name = "Prince Philip"),
        Person(id = "pc", name = "Prince Charles"),
        Person(id = "pw", name = "Prince William")
    )

    fun getPersonById(id: String) = data.firstOrNull { person -> person.id == id}
    fun getPersonByName(name: String) = data.firstOrNull { person -> person.name == name }
    fun createPerson(name: String): Person {
        val person = Person(id = Math.random().toString(), name = name)
        data.add(person)
        return person
    }
}
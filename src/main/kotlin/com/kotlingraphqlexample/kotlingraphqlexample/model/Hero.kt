package com.kotlingraphqlexample.kotlingraphqlexample.model

import javax.persistence.*

@Entity
@Table(name = "superheroes")
data class Hero(
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    override val id: String = "0",
    override  val name: String,
    override val image: String,
    val ability: String?
): Person {
    private constructor(): this("", "", "", "")
}


data class Heroes(val members: MutableList<Hero>)
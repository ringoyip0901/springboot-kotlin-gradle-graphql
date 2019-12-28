package com.kotlingraphqlexample.kotlingraphqlexample.model

import javax.persistence.*

@Entity
@Table(name = "superheroes")
data class Hero(
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    override val id: String,
    override  val name: String,
    override val image: String,
    val ability: String?
): Person {}

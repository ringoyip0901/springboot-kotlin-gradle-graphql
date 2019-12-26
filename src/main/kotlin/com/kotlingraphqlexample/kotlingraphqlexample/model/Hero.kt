package com.kotlingraphqlexample.kotlingraphqlexample.model

data class Hero(
    override val id: String,
    override  val name: String,
    override val image: String,
    val ability: String?
): Person

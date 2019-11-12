package com.kotlingraphqlexample.kotlingraphqlexample

data class Person(
    val id: String,
    val cursor: String,
    val name: String,
    val image: String? = null
)

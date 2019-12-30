package com.kotlingraphqlexample.kotlingraphqlexample.model

data class CreatePersonInput (
    val type: Type, val name: String, val image: String, val title: Title?, val ability: String?
)
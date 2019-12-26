package com.kotlingraphqlexample.kotlingraphqlexample.model

data class CreatePersonInput (
    val type: TYPE, val name: String, val image: String, val title: TITLE?, val ability: String?
)
package com.kotlingraphqlexample.kotlingraphqlexample.model


data class Royalty(
    override val id: String,
    override val name: String,
    override val image: String,
    val title: TITLE?
): Person


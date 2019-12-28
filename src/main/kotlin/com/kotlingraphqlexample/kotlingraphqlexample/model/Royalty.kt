package com.kotlingraphqlexample.kotlingraphqlexample.model

import javax.persistence.*
import javax.persistence.Entity
import javax.persistence.Table

@Entity
@Table(name = "family")
data class Royalty(
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    override val id: String,
    override val name: String,
    override val image: String,
    val title: TITLE?
): Person


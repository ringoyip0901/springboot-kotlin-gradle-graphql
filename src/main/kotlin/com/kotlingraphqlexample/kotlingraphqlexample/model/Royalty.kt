package com.kotlingraphqlexample.kotlingraphqlexample.model

import javax.persistence.*


@Entity
@Table(name = "family")
data class Royalty(
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    override val id: String = "0",
    override val name: String,
    @Column(name = "image")
    override val image: String,
    @Column(name = "title")
    val title: Title?
): Person {
    private constructor(): this("", "", "", Title.QUEEN)
}



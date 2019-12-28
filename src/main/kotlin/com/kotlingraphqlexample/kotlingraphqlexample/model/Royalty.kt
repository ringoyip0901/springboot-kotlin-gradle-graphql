package com.kotlingraphqlexample.kotlingraphqlexample.model

import javax.persistence.*


@Entity
@Table(name = "family")
data class Royalty(
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    override val id: String,
    override val name: String,
    override val image: String,
    val title: TITLE?
): Person {}


//@Entity
//class  {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    var id: Long? = null
//    var name: String? = null
//
//    constructor() {}
//    constructor(name: String?) {
//        this.name = name
//    }
//
//    override fun toString(): String {
//        return "Book{" +
//            "id=" + id +
//            ", name='" + name + '\'' +
//            '}'
//    }
//
//}
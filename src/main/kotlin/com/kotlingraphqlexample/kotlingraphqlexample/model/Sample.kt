package com.kotlingraphqlexample.kotlingraphqlexample.model

import javax.persistence.*

@Entity
data class Sample(
    val name: String,
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long = -1
){
  private constructor(): this("")
}
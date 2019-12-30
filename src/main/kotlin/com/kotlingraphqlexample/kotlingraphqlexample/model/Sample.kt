package com.kotlingraphqlexample.kotlingraphqlexample.model

import javax.persistence.*

@Entity
@Table(name = "sample")
data class Sample (
    @Column(name = "name")
    val name: String,
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    val id: String = "0"
){
  private constructor(): this("")
}
package com.kotlingraphqlexample.kotlingraphqlexample.model

import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

interface Person {
  val id: String
  val name: String
  val image: String
}

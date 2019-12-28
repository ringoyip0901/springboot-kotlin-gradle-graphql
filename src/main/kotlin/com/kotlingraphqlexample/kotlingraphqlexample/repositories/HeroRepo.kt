package com.kotlingraphqlexample.kotlingraphqlexample.repositories

import com.kotlingraphqlexample.kotlingraphqlexample.model.Hero
import com.kotlingraphqlexample.kotlingraphqlexample.model.Royalty
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface HeroRepo: JpaRepository<Hero, Long> {
  override fun findAll(): MutableList<Hero> {
    TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
  }
}
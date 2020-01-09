package com.kotlingraphqlexample.kotlingraphqlexample.repositories

import com.kotlingraphqlexample.kotlingraphqlexample.model.Hero
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import javax.transaction.Transactional

@Repository
@Transactional
interface HeroRepo: JpaRepository<Hero, Long> {
  override fun findAll(): MutableList<Hero>
}
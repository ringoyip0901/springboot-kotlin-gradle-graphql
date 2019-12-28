package com.kotlingraphqlexample.kotlingraphqlexample.repositories

import com.kotlingraphqlexample.kotlingraphqlexample.model.Royalty
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface RoyaltyRepo: JpaRepository<Royalty, Long> {
  override fun findAll(): MutableList<Royalty> {
    TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
  }
}
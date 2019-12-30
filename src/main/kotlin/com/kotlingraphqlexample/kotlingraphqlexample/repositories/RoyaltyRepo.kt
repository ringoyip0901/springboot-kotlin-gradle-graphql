package com.kotlingraphqlexample.kotlingraphqlexample.repositories

import com.kotlingraphqlexample.kotlingraphqlexample.model.Royalty
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import javax.transaction.Transactional

@Repository
@Transactional
interface RoyaltyRepo: JpaRepository<Royalty, Long> {
//  override fun findAll(): MutableList<Royalty>
}
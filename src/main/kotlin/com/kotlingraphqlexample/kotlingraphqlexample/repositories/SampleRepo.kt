package com.kotlingraphqlexample.kotlingraphqlexample.repositories

import com.kotlingraphqlexample.kotlingraphqlexample.model.Sample
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import javax.transaction.Transactional

@Repository
@Transactional
interface SampleRepo: JpaRepository<Sample, Long> {
  override fun findAll(): MutableList<Sample>
  override fun <S : Sample?> saveAndFlush(entity: S): S {
    TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
  }
}
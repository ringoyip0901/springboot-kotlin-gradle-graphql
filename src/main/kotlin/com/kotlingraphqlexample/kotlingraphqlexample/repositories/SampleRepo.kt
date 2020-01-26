package com.kotlingraphqlexample.kotlingraphqlexample.repositories

import com.kotlingraphqlexample.kotlingraphqlexample.model.Sample
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import javax.transaction.Transactional

@Repository
@Transactional
interface SampleRepo: JpaRepository<Sample, Long> {
<<<<<<< HEAD
//  override fun findAll(): MutableList<Sample>
//  override fun <S : Sample?> save(entity: S): S
=======
  override fun findAll(): MutableList<Sample>
  override fun <S : Sample?> save(entity: S): S
>>>>>>> e930a5c140d44524e94874ecb5d03e5267289ab3
}
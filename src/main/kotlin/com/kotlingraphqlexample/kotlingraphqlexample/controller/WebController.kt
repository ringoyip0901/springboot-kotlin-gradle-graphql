package com.kotlingraphqlexample.kotlingraphqlexample.controller

import com.kotlingraphqlexample.kotlingraphqlexample.model.Sample
import com.kotlingraphqlexample.kotlingraphqlexample.repositories.SampleRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class WebController {
  @Autowired
  lateinit var sampleRepo: SampleRepo;
  @GetMapping("/save")
  fun saveAction(): MutableList<Sample> {
    sampleRepo.save(Sample("sample"))
    val all = sampleRepo.findAll();
    return all;
  }
}
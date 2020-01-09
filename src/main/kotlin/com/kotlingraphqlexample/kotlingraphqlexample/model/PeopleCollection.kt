package com.kotlingraphqlexample.kotlingraphqlexample.model
import Edge

data class PeopleCollection(val edges: List<Edge>, val pageInfo: PageInfo, val totalCount: Int)

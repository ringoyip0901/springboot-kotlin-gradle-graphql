package com.kotlingraphqlexample.kotlingraphqlexample.model

data class PageInfo(val hasNextPage: Boolean = false, val hasPreviousPage: Boolean = false, val startCursor: String = "1", val endCursor: String = "100000")

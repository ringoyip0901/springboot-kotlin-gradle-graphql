package com.kotlingraphqlexample.kotlingraphqlexample

data class PageInfo(val hasNextPage: Boolean = true, val hasPreviousPage: Boolean = false, val startCursor: String = "1", val endCursor: String = "3")

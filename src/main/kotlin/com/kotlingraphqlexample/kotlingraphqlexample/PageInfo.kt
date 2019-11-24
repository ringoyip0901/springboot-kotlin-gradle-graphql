package com.kotlingraphqlexample.kotlingraphqlexample

data class PageInfo(val hasNextPage: Boolean = false, val hasPreviousPage: Boolean = false, val startCursor: String = "3", val endCursor: String = "5")

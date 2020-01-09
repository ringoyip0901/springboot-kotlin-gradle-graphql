package com.kotlingraphqlexample.kotlingraphqlexample.model

import Edge

data class MutationPayload (
    val result: Edge,
    val error: String = "Server Error"
)
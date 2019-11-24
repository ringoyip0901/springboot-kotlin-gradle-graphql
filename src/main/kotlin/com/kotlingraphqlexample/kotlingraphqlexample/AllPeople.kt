import com.kotlingraphqlexample.kotlingraphqlexample.Edges
import com.kotlingraphqlexample.kotlingraphqlexample.PageInfo
import com.kotlingraphqlexample.kotlingraphqlexample.Person

data class AllPeople(val people: List<Person>, val allPeople: Edges)

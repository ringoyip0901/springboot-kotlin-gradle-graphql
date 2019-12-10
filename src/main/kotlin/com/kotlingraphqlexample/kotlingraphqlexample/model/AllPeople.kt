import com.kotlingraphqlexample.kotlingraphqlexample.model.Edges
import com.kotlingraphqlexample.kotlingraphqlexample.model.Person

data class AllPeople(val people: List<Person>, val allPeople: Edges)

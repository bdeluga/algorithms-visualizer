import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="flex justify-center items-center gap-20">
      <Link to={'sorting'} className="btn blue">
        Sorting
      </Link>
      <Link to={'pathfinding'} className="btn green">
        Path finding
      </Link>
    </main>
  )
}


import { useAuth } from "../context/AuthContext";

export default function Navbar({ onToggle }) {
  const { user } = useAuth();

  // Show navbar only for logged-in users
  if (!user) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white h-14 px-4 py-3 shadow flex items-center justify-between">
      {/* Left side: Toggle + Title */}
      <div className="flex items-center space-x-4">
        <button onClick={onToggle} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      {/* Right side: Home, Logout, Username */}
      <div className="flex items-center space-x-4">

        <span className="hidden sm:inline text-sm font-medium">Welcome {user.name}</span>
      </div>
    </nav>
  );
}

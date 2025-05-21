type P = string;
interface Route {
  from: number;
  to: number;
  transport: string[];
}

class scotlandYard {
  private players: P[];

  constructor(mrX: P, play1: P, play2: P, play3: P, play4: P, play5: P) {
    this.players = [mrX, play1, play2, play3, play4, play5];
  }

  allPlayers(): P[] {
    return this.players;
  }

  assignStartingTickets() {
    const [mrX, ...players] = this.players;
  }
}

const player = new scotlandYard(
  "sidd",
  "sam",
  "pratibha",
  "likhi",
  "ank",
  "roh"
);

console.log(player.allPlayers());

const routes = new Set<Route>([
  { from: 1, to: 2, transport: ["taxi", "bus"] },
  { from: 2, to: 3, transport: ["taxi"] },
]);

console.log(routes);

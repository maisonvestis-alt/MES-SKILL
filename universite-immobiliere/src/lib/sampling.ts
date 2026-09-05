import type { QuizQuestion } from "./types";

/** Mélange déterministe à partir d'une graine, pour des tirages reproductibles. */
export function seededShuffle<T>(items: T[], seed: number): T[] {
  const arr = [...items];
  let s = seed >>> 0;
  const rand = () => {
    // xorshift32
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 100000) / 100000;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Tire un échantillon de questions en répartissant les tirages entre les
 * sujets, afin qu'un examen ne porte pas trois fois sur la même notion.
 */
export function sampleQuestions(pool: QuizQuestion[], count: number, seed: number): QuizQuestion[] {
  if (pool.length <= count) return seededShuffle(pool, seed);

  const byTopic = new Map<string, QuizQuestion[]>();
  for (const q of pool) {
    const key = q.topic ?? q.skill;
    if (!byTopic.has(key)) byTopic.set(key, []);
    byTopic.get(key)!.push(q);
  }

  const buckets = seededShuffle([...byTopic.values()], seed).map((b) => seededShuffle(b, seed + 7));
  const picked: QuizQuestion[] = [];
  let round = 0;
  while (picked.length < count) {
    let progressed = false;
    for (const bucket of buckets) {
      if (round < bucket.length) {
        picked.push(bucket[round]);
        progressed = true;
        if (picked.length === count) break;
      }
    }
    if (!progressed) break;
    round += 1;
  }
  return seededShuffle(picked, seed + 13);
}

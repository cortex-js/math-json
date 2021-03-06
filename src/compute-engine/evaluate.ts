import { Expression } from '../public';
import { ComputeEngine } from './public';

export async function evaluateWithEngine(
  _expr: Expression,
  engine: ComputeEngine
): Promise<Expression | null> {
  // Check if an error has been signaled, or if
  // the time or memory budget have been exceeded.
  if (!engine.shouldContinueExecution()) return null;

  // @todo: implement evaluation algorithm:
  // 1/ Convert to Canonical Form.
  // 2/ Is it a number?
  // 3/ Is is a symbol?
  // 4/ Is it a dictionary?
  // 5/ Is it a function?
  // 5.1/ Does it have a definition?
  // 5.2/ Is it idempotent?
  // 5.3/ Is it threadable?
  // 5.4/ Evaluate each argument
  // (respecting Hold)

  // 6/ Convert the result to canonical form (or some other form...)?
  return 'Nothing';
}

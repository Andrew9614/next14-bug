import { Bug } from './Bug';

export default function Home() {
  return <Bug>{Array(6).fill(<div>F</div>)}</Bug>;
}

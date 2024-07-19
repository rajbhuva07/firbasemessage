
import { useState } from 'react';
import { signUp } from '../../auth';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      console.log('User signed up successfully!');
      // Redirect or show success message
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error, e.g., show error message
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
import { redirect } from 'next/navigation'

function Profile() {
  return (
    redirect('search')
  );
}

export default Profile;

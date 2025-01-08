import Button from '@/components/common/Button';
import React from 'react'

const about = () => {
  return (
      <div>
          <h1 className="text-3xl font-bold mb-6">About Us</h1>

          {/* Displaying three buttons with different sizes and shapes */}
          <Button size="small" shape="rounded-sm">
              Small Rounded
          </Button>
          <Button size="medium" shape="rounded-md">
              Medium Rounded
          </Button>
          <Button size="large" shape="rounded-full">
              Large Rounded
          </Button>
      </div>
  );
}

export default about
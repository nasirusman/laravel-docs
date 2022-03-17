import React from 'react';
import Layout from '@theme/Layout';

const Demo = () => (
    <Layout title="Demo">
        <div
        className="container"
        style={{
          marginTop: '40px',
        }}>
            <h1 style={{ textAlign: 'center'}}>Cara membuat Authentication Scaffolding di Laravel 8 <br />#login #logout #register</h1>
            <p style={{ textAlign: 'center'}}>Install laravel/jetstream, setelah berhasil. install salah satunya Livewire atau Inertia</p>
            <code>composer require laravel/jetstream</code>
            
        </div>
    </Layout>
);

export default Demo;
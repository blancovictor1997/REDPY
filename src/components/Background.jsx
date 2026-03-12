import React from 'react';

export default function Background() {
    return (
        <>
            <div className="fixed inset-0 w-full h-full opacity-[0.07] pointer-events-none -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJnoiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2cpIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')]"></div>
            <div className="fixed inset-0 w-full h-full -z-20 bg-[radial-gradient(circle_at_15%_50%,rgba(37,99,235,0.05),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(124,58,237,0.05),transparent_30%)]"></div>
        </>
    );
}

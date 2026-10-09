
    const mockShipments = [
        { id: 'AH-2026-1001', vehicle: '2023 BMW M3', route: 'Los Angeles, CA -> Miami, FL', status: 'In Transit', type: 'Enclosed' },
        { id: 'AH-2026-1002', vehicle: '2019 Ford F-150', route: 'Dallas, TX -> Chicago, IL', status: 'Delivered', type: 'Open' },
        { id: 'AH-2026-1003', vehicle: '2021 Tesla Model Y', route: 'Seattle, WA -> Denver, CO', status: 'Carrier Assigned', type: 'Open' },
        { id: 'AH-2026-1004', vehicle: '2022 Porsche 911', route: 'New York, NY -> Miami, FL', status: 'In Transit', type: 'Enclosed' },
        { id: 'AH-2026-1005', vehicle: '2020 Honda Civic', route: 'Austin, TX -> Phoenix, AZ', status: 'Pending', type: 'Open' },
        { id: 'AH-2026-1006', vehicle: '2018 Toyota Tacoma', route: 'Denver, CO -> Salt Lake City, UT', status: 'Delivered', type: 'Open' },
        { id: 'AH-2026-1007', vehicle: '2023 Chevrolet Corvette', route: 'Las Vegas, NV -> Los Angeles, CA', status: 'In Transit', type: 'Enclosed' },
        { id: 'AH-2026-1008', vehicle: '2021 Ford Mustang', route: 'Chicago, IL -> Atlanta, GA', status: 'Carrier Assigned', type: 'Open' },
        { id: 'AH-2026-1009', vehicle: '2019 Jeep Wrangler', route: 'Miami, FL -> Orlando, FL', status: 'Delivered', type: 'Open' },
        { id: 'AH-2026-1010', vehicle: '2024 Tesla Cybertruck', route: 'San Francisco, CA -> Austin, TX', status: 'In Transit', type: 'Enclosed' },
        { id: 'AH-2026-1011', vehicle: '2022 Rivian R1T', route: 'Seattle, WA -> Portland, OR', status: 'Pending', type: 'Open' },
        { id: 'AH-2026-1012', vehicle: '2020 Audi Q7', route: 'Boston, MA -> New York, NY', status: 'Delivered', type: 'Enclosed' }
    ];
    // Force update localStorage so the user sees the new data immediately
    localStorage.setItem('autohaul_shipments', JSON.stringify(mockShipments));
    
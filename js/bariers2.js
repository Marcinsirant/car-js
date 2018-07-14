function Barrier()
{
    this.x = 0;
    this.y = 0;
    
    // ...
}

Barrier.prototype.draw = function()
{
    // ...
}


function BarriersManager()
{
    this.barriers = [];
}

BarriersManager.prototype.createBarrier()
{
    let barrier = new Barrier();
    barrier.x = 21;
    barrier.y = 37;
    this.barriers.insert(barrier);
}

BarriersManager.prototype.draw()
{
    for each barrier in barriers
    {
        barrier.draw();
    }
}
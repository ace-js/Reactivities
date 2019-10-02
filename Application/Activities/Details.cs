using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        //IRequest based class returns Activtiy
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }
        }

        // RequestHandler which takes a Query and returns an Activity
        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);

                return activity;
            }
        }
    }
}
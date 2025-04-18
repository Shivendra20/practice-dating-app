services.AddCors(options =>
{
    options.AddPolicy("AllowAngularFrontend",
        builder =>
        {
            builder.WithOrigins("http://localhost:<your-angular-port>")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

// In Configure method:
app.UseCors("AllowAngularFrontend");
